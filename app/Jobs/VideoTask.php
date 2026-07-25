<?php

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Process;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\Dispatchable;

class VideoTask implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 3600;
    public int $tries = 1;

    /**
     * Create a new job instance.
     */
    public function __construct(public string $relativeMp4Path )
    {
        
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $inputFull = Storage::disk('public')->path($this->relativeMp4Path);

        if (!is_file($inputFull)) {
            throw new \RuntimeException("Input file not found: {$inputFull}");
        }
        $baseName = pathinfo($this->relativeMp4Path, PATHINFO_FILENAME);

        $outputRelativeDir = "hls/{$baseName}";
        $outputFullDir = Storage::disk('public')->path($outputRelativeDir);

        if (!is_dir($outputFullDir) && !mkdir($outputFullDir, 0775, true) && !is_dir($outputFullDir)) {
            throw new \RuntimeException("Could not create output dir: {$outputFullDir}");
        }
        $playlistFull = $outputFullDir . DIRECTORY_SEPARATOR . "index.m3u8";
        $segmentTemplate = $outputFullDir . DIRECTORY_SEPARATOR . "seg_%05d.ts";

        $inputFullForFfmpeg = str_replace('\\', '/', $inputFull);
        $playlistFullForFfmpeg = str_replace('\\', '/', $playlistFull);
        $segmentTemplateForFfmpeg = str_replace('\\', '/', $segmentTemplate);

        $cmd = [
            'ffmpeg', '-y',
            '-i', $inputFullForFfmpeg,
            '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '23',
            '-c:a', 'aac', '-b:a', '128k', '-ac', '2',
            '-f', 'hls',
            '-hls_time', '6',
            '-hls_playlist_type', 'vod',
            '-hls_flags', 'independent_segments',
            '-hls_segment_filename', $segmentTemplateForFfmpeg,

            $playlistFullForFfmpeg,
        ];

        $process = new Process($cmd);
        $process->setTimeout($this->timeout);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new \RuntimeException("FFmpeg failed: " . $process->getErrorOutput());
        }

        $url = Storage::disk('public')->url($outputRelativeDir.'/index.m3u8');
        DB::table('videos')->insert([
            'name' => $this->relativeMp4Path,
            'path' => $outputRelativeDir,
        ]);

    }
}

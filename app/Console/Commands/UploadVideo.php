<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use App\Jobs\VideoTask;

#[Signature('app:upload-video')]
#[Description('Command description')]
class UploadVideo extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        VideoTask::dispatch('videos/Flow.mp4');
        $this->info('Dispatched HLS job for videos/Flow.mp4');
    }
}

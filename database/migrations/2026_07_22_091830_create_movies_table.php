<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100)->unique();
            $table->string('poster')->nullable();
            $table->string('meta_banner')->nullable();
            $table->date('movie_created_date')->nullable();
            $table->string('description',255)->default('');
            $table->integer('view')->default(0);
            $table->string('attribute')->default('');
            $table->integer('rating')->default(0);
            $table->foreignId('video_id')->constrained('videos')->onDelete('cascade');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->timestamps();
            $table->index('name');
            $table->index('movie_created_date');
            $table->index('rating');
            $table->index(['rating', 'movie_created_date']);
            $table->index(['movie_created_date', 'rating']);
            $table->fullText('name');
            $table->index(['category_id', 'rating']);
            $table->index(['category_id', 'movie_created_date']);
            $table->index(['category_id', 'rating', 'movie_created_date']);
            $table->index('view');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};

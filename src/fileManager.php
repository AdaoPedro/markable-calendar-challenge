<?php

    const FILE_PATH = __DIR__ . "/data.txt";

    function write(string $content): void {
        file_put_contents(FILE_PATH, $content);
    }

    function read(): string {
        return file_get_contents(FILE_PATH);
    }
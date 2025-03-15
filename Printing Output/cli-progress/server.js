import cliProgress from 'cli-progress';

// Create a new progress bar instance
const progressBar = new cliProgress.SingleBar({
    format: 'Progress |{bar}| {percentage}% | {value}/{total} items',
    barCompleteChar: '\u2588',
    barIncompleteChar: '-',
    hideCursor: true
});

// Set the total count of tasks
const total = 100;
progressBar.start(total, 0);

// Simulate a process
let value = 0;
const interval = setInterval(() => {
    value++;
    progressBar.update(value);

    if (value >= total) {
        clearInterval(interval);
        progressBar.stop();
        console.log('Process Completed!');
    }
}, 100);

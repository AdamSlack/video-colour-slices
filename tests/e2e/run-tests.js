const createTestCafe = require('testcafe');

let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        runner = testcafe.createRunner();

        return runner
			.src([
                './tests/e2e/page-layout.test.js',
                './tests/e2e/generating-circles.test.js',
                './tests/e2e/generating-lines.test.js',
                './tests/e2e/generating-fans.test.js'
            ])
            .screenshots({
                path: 'reports/screenshots',
                takeOnFails: true
            })
            .browsers(['firefox:headless'])
            .reporter('list')
            .run();
    })
    .then(() => {
        testcafe.close();
    })
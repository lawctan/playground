
## Run cron Issue

```bash
npm run cron
```

Error:

```
AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  (0, assert_1.default)(false)

    at doSome (/Users/lawctan/playground/playground/dist/lib/svc/helper.js:10:26)
    at /Users/lawctan/playground/playground/dist/lib/svc/jobs/analyze-caption-job.js:51:41
    at step (/Users/lawctan/playground/playground/dist/lib/svc/jobs/analyze-caption-job.js:33:23)
```

## Required solution

1) Need to show stacktrace using the .ts file. The purpose is to make it easier to debug. Compiled .js files are hard to read.

## Run cron Issue

```bash
npm run cron
```

Error:

```
.../playground/lib/svc/jobs/analyze-caption-job.ts:1
import logger from "@/lib/logger";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1055:15)
    at Module._compile (node:internal/modules/cjs/loader:1090:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at MessagePort.<anonymous> (node:internal/main/worker_thread:196:24)
    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:694:20)
    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)
```
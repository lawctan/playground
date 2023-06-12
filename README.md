
## Run cron Issue

```bash
npm run cron
```

Error:

```
...playground/lib/svc/cron.ts:1
import { SHARE_ENV, Worker } from 'worker_threads';
^^^^^^

SyntaxError: Cannot use import statement outside a module
```

## Required solution

1) Be able to run cron.ts using ts-node
2) No extra compilation to .js file 
3) No need to fix existing import statements. For example: `import logger from "@/lib/logger";` should remain as is.

4) Should still be able to do run next.js app alongside the cron.ts. For example, `npm run dev` in one terminal, and `npm run cron` on another terminal running at the same time without issues. Verify by checking `http://localhost:3000/` 

5) Be able to keep extension of existing typecsript files as .ts

## Related issue:

See: https://github.com/TypeStrong/ts-node/issues/1007

Problem with the above approach is it requires changing the imports to end in .ts. Which is not acceptable.
## steps to reproduce

- run in prod mode:

```
npm run build && NODE_OPTIONS='--inspect' npm run start 
```

- goto: localhost:3000

- put your mouse over the top of the link "Go to test."

- While cursor is over teh top of the link, without moving cursor, refresh.

- click the link

- often nothing will happen… wait for a bit… mouse out then mouse back in…

(the page will navigate)
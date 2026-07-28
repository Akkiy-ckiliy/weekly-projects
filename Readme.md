## Week1 タスク管理CLI (TS)
### Day1 型・タスク追加・取得・完了操作の追加。
- taskService.ts
    - addTask
    - getTask
    - completeTask
    - removeTask
- types.ts
    - TaskStatus
    - Task
    - CreateTaskInput

### Day2 CLI・ローカルストレージ追加・重複処理のリファクタリング
- taskStorage.ts
    - saveTasks
    - loadTasks
- taskService
    - initializeTasks
- index.ts
    - CLI: add, list, complete, remove
    - loadTaskシステム
export const enum TaskType {
  initial_prompt = "initial_prompt",
  assistant_reply = "assistant_reply",
  prompter_reply = "prompter_reply",

  rank_initial_prompts = "rank_initial_prompts",
  rank_assistant_replies = "rank_assistant_replies",
  rank_prompter_replies = "rank_prompter_replies",

  label_initial_prompt = "label_initial_prompt",
  label_prompter_reply = "label_prompter_reply",
  label_assistant_reply = "label_assistant_reply",
}

export interface BaseTask {
  id: string;
  type: TaskType;
}

export interface TaskResponse<Task extends BaseTask> {
  id: string;
  userId: string;
  task: Task;
}

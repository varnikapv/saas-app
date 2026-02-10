enum MessageTypeEnum {
  TRANSCRIPT = "transcript",
  FUNCTION_CALL = "function-call",
  FUNCTION_CALL_RESULT = "function-call-result",
  ADD_MESSAGE = "add-message",
}

enum MessageRoleEnum {
  USER = "user",
  SYSTEM = "system",
  ASSISTANT = "assistant",
}

enum TranscriptMessageTypeEnum {
  PARTIAL = "partial",
  FINAL = "final",
}

interface BaseMessage {
  type: MessageTypeEnum;
}

interface TranscriptMessage extends BaseMessage {
  type: MessageTypeEnum.TRANSCRIPT;
  role: MessageRoleEnum;
  transcriptType: TranscriptMessageTypeEnum;
  transcript: string;
}

interface FunctionCallMessage extends BaseMessage {
  type: MessageTypeEnum.FUNCTION_CALL;
  functionCall: {
    name: string;
    parameters: unknown;
  };
}

interface FunctionCallResultMessage extends BaseMessage {
  type: MessageTypeEnum.FUNCTION_CALL_RESULT;
  functionCallResult: {
    forwardToClientEnabled?: boolean;
    result: unknown;
    [a: string]: unknown;
  };
}

type Message =
  | TranscriptMessage
  | FunctionCallMessage
  | FunctionCallResultMessage;

interface CreateAssistantDTO {
  name: string;
  firstMessage: string;
  transcriber: {
    provider: string;
    model: string;
    language: string;
  };
  voice: {
    provider: string;
    voiceId: string;
    stability: number;
    similarityBoost: number;
    speed: number;
    style: number;
    useSpeakerBoost: boolean;
  };
  model: {
    provider: string;
    model: string;
    messages: Array<{
      role: string;
      content: string;
    }>;
  };
  clientMessages: unknown[];
  serverMessages: unknown[];
}

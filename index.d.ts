export interface NtlmType2Msg {
  flags: number;
  encoding: string;
  version: number;
  challenge: Buffer;
  targetName: string;
  targetInfo?: object;
}

export default interface NtlmClient {
  createType1Message: (workstation: string, target: string) => string;
  decodeType2Message: (str: string) => NtlmType2Msg;
  createType3Message: (type2Message: NtlmType2Msg, username: string, password: string, workstation?: string, target?: string) => string;
};
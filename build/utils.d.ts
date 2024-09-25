import { ParsedTranscriptData } from './types';
type Commitment = {
    name?: string;
    path?: string;
    start: number;
    end: number;
};
export declare function processJSON(str: string): Commitment[];
export declare function processTranscript(transcript: string): ParsedTranscriptData;
export declare function expect(cond: any, msg?: string): void;
export declare function stringToBuffer(str: string): number[];
export declare function arrayToHex(uintArr: Uint8Array): string;
export declare function headerToMap(headers: {
    [name: string]: string;
}): Map<string, number[]>;
export {};
//# sourceMappingURL=utils.d.ts.map
import { LoggingLevel, LoggingConfig, Transcript, type Commit, type Reveal, type ProverConfig, type Method, VerifierConfig, VerifierData, NotaryPublicKey } from '../wasm/pkg/tlsn_wasm';
import type { ParsedTranscriptData, ProofData } from './types';
export default function init(config?: {
    loggingLevel?: LoggingLevel;
    hardwareConcurrency?: number;
}): Promise<void>;
export declare class Prover {
    #private;
    static notarize(options: {
        url: string;
        notaryUrl: string;
        websocketProxyUrl: string;
        method?: Method;
        headers?: {
            [name: string]: string;
        };
        body?: any;
        maxSentData?: number;
        maxRecvData?: number;
        id: string;
        commit?: Commit;
    }): Promise<Uint8Array>;
    constructor(config: {
        id?: string;
        serverDns: string;
        maxSentData?: number;
        maxRecvData?: number;
    });
    get id(): string;
    free(): Promise<void>;
    setup(verifierUrl: string): Promise<void>;
    transcript(): Promise<{
        sent: string;
        recv: string;
        ranges: {
            recv: ParsedTranscriptData;
            sent: ParsedTranscriptData;
        };
    }>;
    sendRequest(wsProxyUrl: string, request: {
        url: string;
        method?: Method;
        headers?: {
            [key: string]: string;
        };
        body?: any;
    }): Promise<{
        status: number;
        headers: {
            [key: string]: string;
        };
    }>;
    notarize(commit: Commit): Promise<string>;
}
export declare class Verifier {
    #private;
    constructor(config: VerifierConfig);
    get id(): string;
    verify(): Promise<VerifierData>;
    connect(proverUrl: string): Promise<void>;
}
export declare class NotarizedSession {
    #private;
    constructor(serializedSessionHex: string);
    free(): Promise<void>;
    proof(reveal: Reveal): Promise<string>;
    serialize(): Promise<string>;
}
export declare class TlsProof {
    #private;
    constructor(serializedProofHex: string);
    free(): Promise<void>;
    serialize(): Promise<string>;
    verify(notaryPublicKey: NotaryPublicKey, redactedSymbol?: string): Promise<ProofData>;
}
export declare class NotaryServer {
    #private;
    static from(url: string): NotaryServer;
    constructor(url: string);
    get url(): string;
    publicKey(): Promise<string>;
    sessionUrl(maxSentData?: number, maxRecvData?: number): Promise<string>;
}
export { type ParsedTranscriptData, type ProofData, type LoggingLevel, type LoggingConfig, type Transcript, type Commit, type Reveal, type ProverConfig, };
//# sourceMappingURL=lib.d.ts.map
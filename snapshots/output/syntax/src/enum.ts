// < definition syntax 1.0.0 src/`enum.ts`/

export enum Enum {
//          ^^^^ definition syntax 1.0.0 src/`enum.ts`/Enum#
  A,
//^ definition syntax 1.0.0 src/`enum.ts`/Enum#A.
  B,
//^ definition syntax 1.0.0 src/`enum.ts`/Enum#B.
}

export function newEnum(): Enum {
//              ^^^^^^^ definition syntax 1.0.0 src/`enum.ts`/newEnum().
//                         ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
  return Enum.A
//       ^^^^ reference syntax 1.0.0 src/`enum.ts`/Enum#
//            ^ reference syntax 1.0.0 src/`enum.ts`/Enum#A.
}


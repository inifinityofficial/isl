declare module 'wowjs/dist/wow.js' {
  export interface WOWOptions {
    boxClass?: string;
    animateClass?: string;
    offset?: number;
    mobile?: boolean;
    live?: boolean;
    callback?: (box: HTMLElement) => void;
    scrollContainer?: string | HTMLElement | null;
  }

  export class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    sync(): void;
  }

  // Default export (most common pattern)
  export default WOW;
  export { WOW };
}

declare module 'wowjs/dist/wow' {
  export * from 'wowjs/dist/wow.js';
}

declare module 'wowjs' {
  export * from 'wowjs/dist/wow.js';
}
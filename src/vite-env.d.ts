/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * FormSubmit.co code (or destination email) the forms POST to.
   * See .env.example.
   */
  readonly VITE_FORMSUBMIT_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { generateReactHelpers, generateUploader } from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const Uploader = generateUploader<OurFileRouter>();

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();

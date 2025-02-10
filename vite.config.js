

import MillionLint from "@million/lint";
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [MillionLint.vite({auto:true}), react()],
  base: "https://xipeRafa.github.io/rp-public"
})




 

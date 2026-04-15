"use client"

import * as React from "react"

export function useToast() {
  return {
    toast: ({ title, description, variant }: any) => {
      console.log(`Toast [${variant || 'default'}]: ${title} - ${description}`)
      // Show in alert for now since toast component needs more setup
      alert(`${title}\n${description}`)
    },
    toasts: [],
    dismiss: () => {},
  }
}
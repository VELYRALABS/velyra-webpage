"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md mx-4 bg-card border-border shadow-xl">
          <CardContent className="pt-8 pb-8 px-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 bg-primary/10 p-4 rounded-full">
                <AlertCircle className="h-12 w-12 text-primary shadow-[0_0_15px_rgba(255,92,0,0.3)]" />
              </div>
              
              <h1 className="text-3xl font-display font-bold text-foreground mb-3">
                404
              </h1>
              
              <p className="text-xl font-medium text-foreground mb-4">
                Page Not Found
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                The clinical path you're looking for doesn't exist. It might have been moved or the URL was mistyped.
              </p>

              <div className="flex flex-col w-full gap-3">
                <Link href="/" className="w-full">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Reality
                  </Button>
                </Link>
                
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full border-border text-foreground hover:bg-foreground/5 h-11">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
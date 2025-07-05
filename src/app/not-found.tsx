"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-xl font-semibold border-slate-200 hover:bg-slate-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <p className="text-slate-500 text-sm">
              Need help? <Link href="/contact" className="text-blue-600 hover:underline">Contact our support team</Link>
            </p>
          </motion.div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

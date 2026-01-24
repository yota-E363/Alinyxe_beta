"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nom"
        required
        className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:border-primary outline-none transition-all"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:border-primary outline-none transition-all"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows={4}
        required
        className="w-full p-4 rounded-xl bg-background border border-primary/10 focus:border-primary outline-none transition-all"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn btn-primary py-4 rounded-xl font-bold transition-all ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}

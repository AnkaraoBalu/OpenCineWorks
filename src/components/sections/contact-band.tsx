import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

/**
 * "Talk to us" band on the home page. It only shows once a phone number is set in
 * src/content/site.ts, so no empty or fake contact details are ever published.
 */
export function ContactBand() {
  const { phone, phoneDisplay, whatsapp } = site.contact;
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  return (
    <section id="contact" className="scroll-mt-16 bg-slate-50 py-20" aria-labelledby="contact-title">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5 sm:p-12">
          <p className="text-sm font-bold tracking-widest text-accent-600 uppercase">Get in touch</p>
          <h2 id="contact-title" className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Need help with your edit?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Call or message for help getting started, questions about features, or ideas for what to build next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {whatsapp && (
              <ButtonLink href={`https://wa.me/${digits}`} size="lg" external>
                <MessageCircle className="size-5" aria-hidden />
                WhatsApp
              </ButtonLink>
            )}
            <ButtonLink href={`tel:${phone}`} size="lg" variant={whatsapp ? "secondary" : "primary"} external>
              <Phone className="size-5" aria-hidden />
              {phoneDisplay || phone}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

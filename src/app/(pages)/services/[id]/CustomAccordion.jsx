"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import style from "../../../../Sass/services/customAccordion.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CustomAccordion() {
  const { t } = useTranslation();
  return (
    <div className={style.accordion}>
      <div className={style.container}>
        <h2>{t('services.accordionTitle')}</h2>
        <Accordion
          type="single"
          collapsible
          className={style.customAccordion}
          defaultValue="item-1"
        >
          <AccordionItem value="item-1" className={style.accordionItem}>
            <AccordionTrigger className={style.title}>
              <div className={style.item}>
                <h4>Third-Party API Integrations</h4>
                <span>Click to explore this use case</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={style.content}>
              <div className={style.contentItem}>
                <h3>The Challenge</h3>
                <p>
                  Businesses lose revenue and customer trust when inventory data
                  is inconsistent across multiple sales channels, leading to
                  overselling and stockouts.
                </p>
              </div>
              <div className={style.contentItem}>
                <h4>Our Backend Solution</h4>
                <p>
                  Our event-driven API architecture synchronizes inventory
                  across all channels in real-time, with automatic conflict
                  resolution and rollback mechanisms to prevent discrepancies.
                </p>
              </div>
              <span>Real-time accuracy</span>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className={style.accordionItem}>
            <AccordionTrigger className={style.title}>
              <div className={style.item}>
                <h4>Third-Party API Integrations</h4>
                <span>Click to explore this use case</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={style.content}>
              <div className={style.contentItem}>
                <h3>The Challenge</h3>
                <p>
                  Businesses lose revenue and customer trust when inventory data
                  is inconsistent across multiple sales channels, leading to
                  overselling and stockouts.
                </p>
              </div>
              <div className={style.contentItem}>
                <h4>Our Backend Solution</h4>
                <p>
                  Our event-driven API architecture synchronizes inventory
                  across all channels in real-time, with automatic conflict
                  resolution and rollback mechanisms to prevent discrepancies.
                </p>
              </div>
              <span>Real-time accuracy</span>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className={style.accordionItem}>
            <AccordionTrigger className={style.title}>
              <div className={style.item}>
                <h4>Third-Party API Integrations</h4>
                <span>Click to explore this use case</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={style.content}>
              <div className={style.contentItem}>
                <h3>The Challenge</h3>
                <p>
                  Businesses lose revenue and customer trust when inventory data
                  is inconsistent across multiple sales channels, leading to
                  overselling and stockouts.
                </p>
              </div>
              <div className={style.contentItem}>
                <h4>Our Backend Solution</h4>
                <p>
                  Our event-driven API architecture synchronizes inventory
                  across all channels in real-time, with automatic conflict
                  resolution and rollback mechanisms to prevent discrepancies.
                </p>
              </div>
              <span>Real-time accuracy</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className={style.button}>
          <p>{t('services.desAccordion1')}</p>
          <Button>
            {t('services.accordionButton')}
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Hero from "@/src/components/Hero/Hero";
import FormContainer from "@/src/components/FormContainer/FormContainer";

const accordionItems = [
  {
    icon: "💡",
    label: "Idées d'activités",
    items: [
      "📸 Shooting photo entre copines",
      "🍹 Atelier de création de cocktails",
      "🗺️ Chasse au trésor personnalisée",
      "🕵️‍♀️ Escape Game sur le thème du mariage",
      "💆 Spa & détente",
      "🎭 Soirée déguisée avec dress code fun",
    ],
  },
  {
    icon: "📝",
    label: "Checklist organisation",
    items: [
      "📅 Fixer une date avec toutes les participantes",
      "💰 Définir un budget",
      "📍 Choisir une destination ou un lieu",
      "🏨 Réserver les hébergements & activités",
      "🍽️ Prévoir les repas & boissons",
      "🎁 Préparer des surprises pour la mariée",
    ],
  },
  {
    icon: "🧰",
    label: "Kit de survie EVJF",
    items: [
      "👕 Bracelets ou t-shirts assortis",
      "🎶 Playlist pour s’ambiancer",
      "🥤 Kit anti-gueule de bois (eau, aspirine...)",
      "🕶️ Accessoires fun (lunettes, boas…)",
      "📸 Appareil photo ou Instax",
      "📓 Carnet souvenir pour la mariée",
    ],
  },
  {
    icon: "📚",
    label: "Liens & ressources utiles",
    items: [
      <a href="#">📄 Modèle d’invitation EVJF</a>,
      <a href="#">🧾 Checklist imprimable</a>,
      <a href="#">📦 Box EVJF personnalisée</a>,
      <a href="#">💡 Blog d'idées EVJF</a>,
    ],
  },
];

export default function Toolbox() {
  return (
    <div>
      <Hero
        title="La boîte à outils pour un EVJF mémorable"
        subtitle="Toutes les ressources pour organiser un EVJF parfait"
      />

      <FormContainer>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Voici tous les outils indispensables pour organiser un EVJF
          inoubliable !
          <br /> Tu y trouveras des idées d’activités, une checklist, des
          ressources pratiques et même un kit de survie.
          <br />
          <br /> Fais-en bon usage 👑
        </Typography>

        {accordionItems.map((section, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "0.6rem" }}>{section.icon}</span>
                {section.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "2rem",
                  padding: 0,
                }}
              >
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      paddingLeft: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {React.isValidElement(item)
                      ? React.cloneElement(item, { key: i })
                      : item}
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </FormContainer>
    </div>
  );
}

import GridLayout from "@/components/grid-layout";
import ContentCard from "@/components/content-card";
import ServiceCard from "@/components/service-card";
import EncyclopediaCard from "@/components/encyclopedia-card";
import ArticleCard from "@/components/article-card";

interface CardShowcaseProps {
  cards: any[];
  variant?: "default" | "masonry" | "alternating" | "featured" | "staggered" | "mixed";
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  cardType: "content" | "service" | "encyclopedia" | "article";
}

export default function CardShowcase({
  cards,
  variant = "default",
  columns = 3,
  gap = "md",
  cardType,
}: CardShowcaseProps) {
  const renderCard = (card: any, index: number) => {
    switch (cardType) {
      case "content":
        return (
          <ContentCard
            key={card.id || index}
            title={card.title}
            description={card.description}
            image={card.image}
            href={card.href}
            badge={card.badge}
            variant={index === 0 && variant === "featured" ? "overlay" : 
                   index % 3 === 1 ? "minimal" : "default"}
          />
        );
      case "service":
        return (
          <ServiceCard
            key={card.id || index}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            features={card.features}
            duration={card.duration}
            availability={card.availability}
            support={card.support}
            emergency={card.emergency}
            variant={index === 0 && variant === "featured" ? "featured" : 
                   index % 3 === 1 ? "horizontal" : "default"}
          />
        );
      case "encyclopedia":
        return (
          <EncyclopediaCard
            key={card.id || index}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            entryCount={card.entryCount}
            lastUpdated={card.lastUpdated}
            variant={index === 0 && variant === "featured" ? "default" : 
                   index % 3 === 1 ? "list" : "compact"}
          />
        );
      case "article":
        return (
          <ArticleCard
            key={card.id || index}
            title={card.title}
            excerpt={card.excerpt}
            image={card.image}
            href={card.href}
            author={card.author}
            publishedAt={card.publishedAt}
            readTime={card.readTime}
            tags={card.tags}
          />
        );
      default:
        return null;
    }
  };

  return (
    <GridLayout 
      columns={columns} 
      gap={gap} 
      variant={variant}
      className="w-full"
    >
      {cards.map((card, index) => renderCard(card, index))}
    </GridLayout>
  );
}
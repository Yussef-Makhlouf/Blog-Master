import servicesData from "@/data/services.json"
import blogData from "@/data/blog.json"
import encyclopediaData from "@/data/encyclopedia.json"

// Services
export async function getServices() {
  return servicesData
}

export async function getService(id: string) {
  return servicesData.find((service) => service.id === id)
}

// Blog
export async function getBlogTopics() {
  return blogData
}

export async function getBlogTopic(topicId: string) {
  return blogData.find((topic) => topic.id === topicId)
}

export async function getTopicArticles(topicId: string) {
  try {
    const articles = await import(`@/data/topics/${topicId}.json`)
    return articles.default
  } catch (error) {
    return []
  }
}

export async function getArticle(topicId: string, articleId: string) {
  try {
    const articles = await import(`@/data/topics/${topicId}.json`)
    return articles.default.find((article: any) => article.id === articleId)
  } catch (error) {
    return null
  }
}

// Encyclopedia
export async function getEncyclopediaCategories() {
  return encyclopediaData
}

export async function getEncyclopediaCategory(categoryId: string) {
  return encyclopediaData.find((category) => category.id === categoryId)
}

export async function getCategoryEntries(categoryId: string) {
  try {
    const entries = await import(`@/data/encyclopedia/${categoryId}.json`)
    return entries.default
  } catch (error) {
    return []
  }
}

export async function getCategoryEntry(categoryId: string, entryId: string) {
  try {
    const entries = await import(`@/data/encyclopedia/${categoryId}.json`)
    return entries.default.find((entry: any) => entry.id === entryId)
  } catch (error) {
    return null
  }
}

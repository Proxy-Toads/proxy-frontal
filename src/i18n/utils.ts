import en from './en.json'
import es from './es.json'

const translations = { en, es } as const

export type Lang = keyof typeof translations
type Translations = typeof en

export function useTranslations(lang: Lang) {
  const dict = translations[lang] as Translations
  return (key: keyof Translations): string => dict[key] ?? translations.en[key]
}

export type TextPart = { text: string; bold: boolean }

export function parseBold(text: string): TextPart[] {
  return text.split(/(\*\*[^*]+\*\*)/).map((part) => {
    const match = part.match(/^\*\*(.+)\*\*$/)
    return match ? { text: match[1], bold: true } : { text: part, bold: false }
  })
}

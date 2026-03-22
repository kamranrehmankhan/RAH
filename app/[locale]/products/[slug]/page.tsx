import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

import QuoteForm from '@/components/quote/QuoteForm'
import {buildPageMetadata, getLocaleFromString} from '@/lib/seo/metadata'
import {createSupabaseServerClient} from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

const productCopy = {
  en: {
    home: 'Home',
    collections: 'Collections',
    detailView: 'Detail view',
    imageSoon: 'Product image coming soon',
    series: 'The Solstice Series',
    priceRequest: 'Price on request',
    featuredVariant: 'Featured Variant',
    availableVariants: 'Available Variants',
    pricingLater: 'Pricing will appear after variants are published.',
    addToCollection: 'Add to Collection',
    requestBespoke: 'Request Bespoke Quote',
    craftTitle: 'The Craft of Equilibrium',
    craftDesc:
      'A garment should not just be worn; it should be inhabited. This piece is designed for fluid movement and enduring modest elegance.',
    details: {
      category: 'Category',
      material: 'Material',
      origin: 'Origin',
      care: 'Care'
    },
    detailValues: {
      categoryFallback: 'Editorial Collection',
      materialFallback: 'Premium Heritage Fabric',
      origin: 'Designed in the UAE',
      care: 'Professional dry clean only'
    },
    conciergeTitle: 'Private Concierge',
    conciergeDesc:
      'Tell us your preferred fit and destination. We will confirm variant availability, tailoring, and delivery guidance.'
  },
  ar: {
    home: 'الرئيسية',
    collections: 'المجموعات',
    detailView: 'عرض تفصيلي',
    imageSoon: 'صورة المنتج متاحة قريبًا',
    series: 'سلسلة السولستيس',
    priceRequest: 'السعر عند الطلب',
    featuredVariant: 'الخيار المميز',
    availableVariants: 'الخيارات المتاحة',
    pricingLater: 'سيظهر التسعير بعد نشر الخيارات.',
    addToCollection: 'إضافة إلى المجموعة',
    requestBespoke: 'طلب عرض مخصص',
    craftTitle: 'حرفة الاتزان',
    craftDesc:
      'لا يكفي أن تُرتدى القطعة؛ بل يجب أن تُعاش. صُممت هذه القطعة لانسيابية الحركة والأناقة المحتشمة المستدامة.',
    details: {
      category: 'الفئة',
      material: 'الخامة',
      origin: 'المنشأ',
      care: 'العناية'
    },
    detailValues: {
      categoryFallback: 'مجموعة تحريرية',
      materialFallback: 'نسيج فاخر',
      origin: 'مصمم في الإمارات',
      care: 'تنظيف جاف احترافي'
    },
    conciergeTitle: 'الكونسيرج الخاص',
    conciergeDesc:
      'أخبِرينا بالمقاس والوجهة المفضلة، وسنؤكد التوفر والتفصيل وإرشادات الشحن.'
  },
  ur: {
    home: 'ہوم',
    collections: 'کلیکشنز',
    detailView: 'تفصیلی منظر',
    imageSoon: 'مصنوعہ کی تصویر جلد دستیاب ہوگی',
    series: 'سولسٹس سیریز',
    priceRequest: 'قیمت درخواست پر',
    featuredVariant: 'نمایاں ویرینٹ',
    availableVariants: 'دستیاب ویرینٹس',
    pricingLater: 'ویرینٹس شائع ہونے کے بعد قیمت ظاہر ہوگی۔',
    addToCollection: 'کلیکشن میں شامل کریں',
    requestBespoke: 'بیسپوک کوٹ کی درخواست',
    craftTitle: 'توازن کی دستکاری',
    craftDesc:
      'لباس صرف پہنا نہیں جاتا بلکہ محسوس کیا جاتا ہے۔ یہ ڈیزائن روانی اور دیرپا وقار کے لیے تیار کیا گیا ہے۔',
    details: {
      category: 'زمرہ',
      material: 'میٹیریل',
      origin: 'اصل',
      care: 'نگہداشت'
    },
    detailValues: {
      categoryFallback: 'ایڈیٹوریل کلیکشن',
      materialFallback: 'پریمیم ہیریٹیج فیبرک',
      origin: 'UAE میں ڈیزائن کیا گیا',
      care: 'پروفیشنل ڈرائی کلین'
    },
    conciergeTitle: 'پرائیویٹ کنسئیرج',
    conciergeDesc:
      'اپنا پسندیدہ فِٹ اور منزل بتائیں، ہم دستیابی اور ٹیلرنگ رہنمائی کی تصدیق کریں گے۔'
  },
  fr: {
    home: 'Accueil',
    collections: 'Collections',
    detailView: 'Vue détaillée',
    imageSoon: 'Image produit bientôt disponible',
    series: 'Série Solstice',
    priceRequest: 'Prix sur demande',
    featuredVariant: 'Variante Vedette',
    availableVariants: 'Variantes Disponibles',
    pricingLater: 'Les prix apparaîtront après publication des variantes.',
    addToCollection: 'Ajouter à la Collection',
    requestBespoke: 'Demander un Devis Bespoke',
    craftTitle: "L'Art de l'Équilibre",
    craftDesc:
      'Un vêtement ne se porte pas seulement, il se vit. Cette pièce est pensée pour un mouvement fluide et une élégance durable.',
    details: {
      category: 'Catégorie',
      material: 'Matière',
      origin: 'Origine',
      care: 'Entretien'
    },
    detailValues: {
      categoryFallback: 'Collection Éditoriale',
      materialFallback: 'Tissu Patrimonial Premium',
      origin: 'Conçu aux EAU',
      care: 'Nettoyage à sec professionnel'
    },
    conciergeTitle: 'Conciergerie Privée',
    conciergeDesc:
      'Indiquez votre coupe souhaitée et votre destination. Nous confirmerons disponibilité et conseils de livraison.'
  }
} as const

function safeJsonStringify(value: any) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export default async function ProductPage({
  params
}: {
  params: {locale: string; slug: string}
}) {
  const {slug, locale} = params
  const copy = productCopy[(locale in productCopy ? locale : 'en') as keyof typeof productCopy]

  const supabase = await createSupabaseServerClient()

  const {data: product} = await supabase
    .from('products')
    .select('id,title,slug,description,category,material,seo_title,seo_description')
    .eq('slug', slug)
    .maybeSingle()

  if (!product) notFound()

  const {data: images} = await supabase
    .from('product_images')
    .select('storage_path,sort_order,alt_text')
    .eq('product_id', product.id)
    .order('sort_order', {ascending: true})

  const {data: variants} = await supabase
    .from('product_variants')
    .select('id,label,price,currency,is_default')
    .eq('product_id', product.id)
    .order('is_default', {ascending: false})

  const imageList = (images ?? []) as Array<{
    storage_path: string
    sort_order: number
    alt_text: string | null
  }>

  const variantList = (variants ?? []) as Array<{
    id: string
    label: string
    price: number
    currency: string
    is_default: boolean
  }>

  const defaultVariant = variantList.find((v) => v.is_default) ?? variantList[0]
  const priceForSchema = defaultVariant
    ? {
        price: defaultVariant.price,
        priceCurrency: defaultVariant.currency
      }
    : null

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const storageBaseUrl = supabaseUrl
    ? `${supabaseUrl}/storage/v1/object/public/abaya-images`
    : null

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const baseUrl = siteUrl.replace(/\/+$/, '')
  const categorySlug = product.category || 'Everyday'

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    category: product.category,
    image:
      storageBaseUrl && imageList.length > 0
        ? imageList.map((i) => `${storageBaseUrl}/${i.storage_path}`)
        : undefined,
    offers: priceForSchema
      ? {
          '@type': 'Offer',
          price: priceForSchema.price,
          priceCurrency: priceForSchema.priceCurrency,
          availability: 'https://schema.org/InStock'
        }
      : undefined
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: copy.home,
        item: `${baseUrl}/${locale}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: copy.collections,
        item: `${baseUrl}/${locale}/collections`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categorySlug,
        item: `${baseUrl}/${locale}/collections/${encodeURIComponent(
          categorySlug
        )}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.title,
        item: `${baseUrl}/${locale}/products/${product.slug}`
      }
    ]
  }

  const heroImage = imageList[0]
  const sideImages = imageList.slice(1, 3)
  const detailsRows = [
    {
      label: copy.details.category,
      value: product.category || copy.detailValues.categoryFallback
    },
    {
      label: copy.details.material,
      value: product.material || copy.detailValues.materialFallback
    },
    {label: copy.details.origin, value: copy.detailValues.origin},
    {label: copy.details.care, value: copy.detailValues.care}
  ]

  return (
    <main className="bg-surface px-6 pb-24 pt-14 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonStringify([productJsonLd, breadcrumbJsonLd])
        }}
      />

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container">
            {storageBaseUrl && heroImage ? (
              <Image
                src={`${storageBaseUrl}/${heroImage.storage_path}`}
                alt={heroImage.alt_text ?? product.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 58vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-on-surface-variant">
                {copy.imageSoon}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {sideImages.length > 0
              ? sideImages.map((img) => (
                  <div
                    key={img.storage_path}
                    className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container"
                  >
                    {storageBaseUrl ? (
                      <Image
                        src={`${storageBaseUrl}/${img.storage_path}`}
                        alt={img.alt_text ?? product.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                ))
              : [0, 1].map((idx) => (
                  <div
                    key={`placeholder-${idx}`}
                    className="flex aspect-[4/5] items-center justify-center rounded-xl bg-surface-container text-sm text-on-surface-variant"
                  >
                    {copy.detailView}
                  </div>
                ))}
          </div>
        </div>

        <div className="flex flex-col lg:sticky lg:top-24 lg:col-span-5">
          <div className="space-y-5">
            <p className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-primary">
              {product.category || copy.series}
            </p>
            <h1 className="font-headline text-4xl font-black leading-tight tracking-tight text-on-surface md:text-5xl">
              {product.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-headline text-3xl font-semibold text-primary">
                {defaultVariant
                  ? `${defaultVariant.currency} ${Number(defaultVariant.price).toFixed(2)}`
                  : copy.priceRequest}
              </span>
              {defaultVariant ? (
                <span className="rounded bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {copy.featuredVariant}
                </span>
              ) : null}
            </div>
            <p className="leading-relaxed text-on-surface-variant">
              {product.description}
            </p>
          </div>

          <section className="mt-10">
            <h2 className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-on-surface">
              {copy.availableVariants}
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {variantList.length === 0 ? (
                <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-4 text-sm text-on-surface-variant">
                  {copy.pricingLater}
                </div>
              ) : (
                variantList.map((variant) => (
                  <div
                    key={variant.id}
                    className={`rounded-xl border p-4 ${
                      variant.is_default
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant/40 bg-surface-container-low'
                    }`}
                  >
                    <p className="font-headline text-sm font-bold uppercase tracking-[0.14em] text-on-surface">
                      {variant.label}
                    </p>
                    <p className="mt-2 text-sm text-on-surface-variant">
                      {variant.currency} {Number(variant.price).toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link
              href={`/${locale}/checkout`}
              className="rounded-full bg-primary px-6 py-4 text-center font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-primary transition-colors hover:bg-primary-dim"
            >
              {copy.addToCollection}
            </Link>
            <Link
              href={`/${locale}/quote`}
              className="rounded-full border border-outline-variant px-6 py-4 text-center font-headline text-xs font-bold uppercase tracking-[0.2em] text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              {copy.requestBespoke}
            </Link>
          </div>

          <section className="mt-12 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
            <h2 className="font-headline text-xl font-bold text-on-surface">
              {copy.craftTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
              {copy.craftDesc}
            </p>
            <div className="mt-6 space-y-3">
              {detailsRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-3 text-sm"
                >
                  <span className="font-headline text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                    {row.label}
                  </span>
                  <span className="text-right text-on-surface">{row.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto mt-16 grid max-w-screen-2xl gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
          <h2 className="font-headline text-xl font-bold text-on-surface">
            {copy.conciergeTitle}
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            {copy.conciergeDesc}
          </p>
        </div>
        <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6">
          <QuoteForm productId={product.id} variantId={defaultVariant?.id} />
        </div>
      </section>
    </main>
  )
}

export async function generateMetadata({
  params
}: {
  params: {locale: string; slug: string}
}) {
  const {locale: localeParam} = await params
  const locale = getLocaleFromString(localeParam) ?? 'en'
  const {slug} = params

  try {
    const supabase = await createSupabaseServerClient()

    const {data: product} = await supabase
      .from('products')
      .select('id,title,slug,description,category,material,seo_title,seo_description')
      .eq('slug', slug)
      .maybeSingle()

    if (!product) {
      return buildPageMetadata({
        locale,
        restPath: `/products/${slug}`,
        title: 'Abayas | Product',
        description: 'Premium abayas with worldwide shipping.'
      })
    }

    const {data: images} = await supabase
      .from('product_images')
      .select('storage_path,sort_order')
      .eq('product_id', product.id)
      .order('sort_order', {ascending: true})
      .limit(1)

    const firstImagePath = (images ?? [])[0]?.storage_path as
      | string
      | undefined

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const storageBaseUrl = supabaseUrl
      ? `${supabaseUrl}/storage/v1/object/public/abaya-images`
      : null

    const ogImageUrl =
      storageBaseUrl && firstImagePath
        ? `${storageBaseUrl}/${firstImagePath}`
        : undefined

    const title = product.seo_title ?? product.title
    const description = product.seo_description ?? product.description

    return buildPageMetadata({
      locale,
      restPath: `/products/${slug}`,
      title,
      description,
      ogImageUrl
    })
  } catch {
    return buildPageMetadata({
      locale,
      restPath: `/products/${slug}`,
      title: 'Abayas | Product',
      description: 'Premium abayas with worldwide shipping.'
    })
  }
}

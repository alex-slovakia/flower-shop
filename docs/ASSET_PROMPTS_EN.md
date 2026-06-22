# LÚKA: Image and Video Asset Prompts

## Shared visual anchor

Place this sentence at the beginning of every prompt to keep the full series visually consistent:

> Cinematic product photography for LÚKA, a contemporary flower studio in Bratislava. A flower shop at night after rainfall, deep neutral-black surroundings, a single orchid-purple accent color, soft side lighting, natural petal texture, flowers that feel fresh and real, and a sophisticated composition without wedding or rustic clichés.

Shared negative instructions:

> No text, logos, watermarks, extra human hands, plastic flowers, oversaturated HDR colors, beige backgrounds, gold decorations, wedding styling, glass cards, fantasy glow, symmetrical catalog arrangements, or blurred petals.

## Hero poster

Aspect ratio `16:9`, minimum resolution 2400 × 1350 px.

> [VISUAL ANCHOR] A wide cinematic shot of meadow flowers and purple lisianthus inside a dark flower studio. The camera is positioned very low among the stems. Flowers fill the center and right side of the image, while the left third remains darker and visually clean to accommodate a white headline. Water droplets rest on the petals, illuminated by subtle cool backlighting. Realistic 35 mm film grain and a high dynamic range without an artificial HDR appearance. [NEGATIVE INSTRUCTIONS]

## Hero video

Duration 8 to 10 seconds, `16:9`, 4K, 24 fps, silent. The first and final shots should support a seamless loop.

> A cinematic macro camera movement through fresh purple and white flowers inside a flower shop at night. The camera begins low beside wet stems, then rises extremely slowly to reveal petals illuminated by soft side lighting. The flowers move only slightly in a gentle current of air. Water droplets catch the light while the background remains deep, neutral black. Camera motion must be stable, slow, and suitable for scroll scrubbing. No cuts, zooms, people, or text. The final composition should closely resemble the opening frame to support a seamless loop.

## Scroll transition videos

Each video should be 5 to 7 seconds, `16:9`, 4K, 24 fps, with one uninterrupted camera movement.

### 1. From flower to bouquet

> A close-up of one purple lisianthus flower against a black background. The camera slowly pulls backward to reveal a complete, loosely tied bouquet resting on a dark worktable. Soft side lighting, natural shadows, and realistic flowers. Stable linear motion suitable for scroll-controlled playback. No hands, cuts, or text.

### 2. Binding the bouquet

> A top-down view of a dark florist’s worktable. Two realistic hands in simple black sleeves slowly add one flower stem and tighten natural twine around the bouquet. One clear action with no sudden movement. Orchid-purple flowers remain the visual focus. No jewelry, commercial-style manicure, text, or extra hands.

### 3. Delivery

> A cinematic nighttime shot of a simple dark delivery van parked on a wet Bratislava street, with no visible vehicle branding. The rear door closes slowly, briefly revealing a securely stored bouquet inside. City lights reflect across the wet asphalt while the camera gently moves sideways. No readable license plate, logos, or text.

## Product photography

Generate every image at a `4:5` aspect ratio and a minimum resolution of 1600 × 2000 px. Keep camera distance, vase height, framing, and lighting consistent across the series to create a cohesive catalog.

1. **Night Meadow**

   > [VISUAL ANCHOR] A loose vertical bouquet made from purple lisianthus, scabiosa, limonium, and delicate greenery, wrapped in matte dark-gray paper. A slightly asymmetrical silhouette, photographed straight on at flower height. [NEGATIVE INSTRUCTIONS]

2. **First Light**

   > [VISUAL ANCHOR] An airy white bouquet made from white roses, ranunculus, waxflower, and eucalyptus. Clean neutral-white flowers against a deep black background with subtle silver side lighting. [NEGATIVE INSTRUCTIONS]

3. **Bratislava Morning**

   > [VISUAL ANCHOR] A fresh bouquet of premium white and saturated-purple tulips with delicate birch branches. Natural movement in the stems and a graphic but deliberately asymmetrical composition. [NEGATIVE INSTRUCTIONS]

4. **Hot Pulse**

   > [VISUAL ANCHOR] A bold bouquet made from saturated raspberry and red garden roses, amaranthus, and dark-green ruscus. Dramatic but realistic lighting and matte black wrapping paper. [NEGATIVE INSTRUCTIONS]

5. **A Quiet Thank You**

   > [VISUAL ANCHOR] A soft bouquet of pink peonies, pale roses, astilbe, and eucalyptus. A sensitive, irregular composition with restrained cinematic contrast and no wedding aesthetic. [NEGATIVE INSTRUCTIONS]

6. **Wild**

   > [VISUAL ANCHOR] An untamed seasonal bouquet made from small meadow flowers, grasses, chamomile, and greenery. Clearly varied stem heights with contemporary urban wrapping. [NEGATIVE INSTRUCTIONS]

7. **Sunday**

   > [VISUAL ANCHOR] A calm garden bouquet made from powder-pink roses, lisianthus, lady’s mantle, and greenery. A naturally curved silhouette illuminated by soft afternoon side lighting. [NEGATIVE INSTRUCTIONS]

8. **Signal**

   > [VISUAL ANCHOR] A graphic bouquet made from bold gerberas, tulips, dianthus, and a single anthurium. An orchid-purple and raspberry palette with a sharp rhythm of shapes and no neon glow. [NEGATIVE INSTRUCTIONS]

9. **Between Us**

   > [VISUAL ANCHOR] An intimate monochromatic pink bouquet made from roses, ranunculus, carnations, and waxflower. A compact but natural arrangement with a quiet, personal mood. [NEGATIVE INSTRUCTIONS]

10. **City Garden**

    > [VISUAL ANCHOR] A botanical bouquet made from anthurium, ammi, fern, and eucalyptus. Structured greenery dominates the composition, with one saturated-purple focal point and an architectural silhouette. [NEGATIVE INSTRUCTIONS]

11. **Remembrance**

    > [VISUAL ANCHOR] A dignified white bouquet made from lilies, white roses, lisianthus, and eucalyptus. A clean and restrained composition with soft neutral lighting and no funeral symbols. [NEGATIVE INSTRUCTIONS]

12. **Full Sun**

    > [VISUAL ANCHOR] An energetic bouquet made from sunflowers, orange gerberas, solidago, and seasonal greenery. Saturated color inside a dark environment with natural irregularity. [NEGATIVE INSTRUCTIONS]

## Lifestyle photography

Aspect ratio `3:2` or `16:9`, minimum 2000 px on the longest side.

### The studio

> [VISUAL ANCHOR] A wide documentary photograph of a small contemporary flower studio in Bratislava. A dark worktable, buckets of fresh flowers, and one florist shown in profile while working. A natural, unposed moment illuminated by cool morning light from the storefront window. [NEGATIVE INSTRUCTIONS]

### The handoff

> [VISUAL ANCHOR] A close-up of hands personally passing a bouquet inside the entrance of an urban apartment building. Faces remain outside the frame. Wet stone after rainfall, an authentic moment, a sharply focused bouquet, and natural-looking hands. [NEGATIVE INSTRUCTIONS]

### Craft detail

> [VISUAL ANCHOR] A macro photograph of freshly cut stems, florist scissors, and water droplets on a dark worktable. An orchid-purple flower is softly out of focus in the background, with tactile documentary texture. [NEGATIVE INSTRUCTIONS]

## Export and naming

- Images: AVIF or WebP at quality 80 to 88.
- Hero poster: `public/media/hero-poster.webp`.
- Hero video: `public/media/hero-scroll.mp4` with a WebM fallback.
- Products: `public/products/<slug>-01.webp` and `-02.webp`.
- Lifestyle: `public/media/atelier.webp`, `handoff.webp`, and `craft.webp`.
- The video should use its first sharp frame as the poster and must not contain an audio track.

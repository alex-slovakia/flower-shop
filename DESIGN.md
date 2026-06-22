# Design System

## Direction

Nočné kvetinárstvo v Bratislave: makro fotografia lupeňov, chladný čierny priestor a orchideová farba nesená ako jediný akcent. Dizajn je obrazový a asymetrický, nákupné prvky zostávajú priame a pokojné.

## Dials

- Design variance: 7
- Motion intensity: 6
- Visual density: 4

## Color

- Background: `oklch(0.09 0 0)`
- Surface: `oklch(0.14 0.012 270)`
- Elevated: `oklch(0.19 0.018 270)`
- Ink: `oklch(0.96 0.006 270)`
- Muted: `oklch(0.72 0.018 270)`
- Primary: `oklch(0.66 0.20 275)`
- Primary deep: `oklch(0.36 0.219 270)`

Jedna tmavá téma a jeden orchideový akcent. Primárne tlačidlá majú takmer biely text.

## Typography

Lokálne balený variabilný Manrope, s výrazným rozdielom medzi 500 a 700. Nadpisy sú široké, úsporné a maximálne dvojriadkové. Text má najviac 70 znakov na riadok.

## Shape and Components

Panely a obrázky používajú 14 px radius, polia 10 px a kompaktné ovládania môžu byť plne zaoblené. Karty sa používajú iba pre skutočné produkty alebo stav košíka. Ostatný obsah delí priestor a tenké neutrálne línie.

## Motion

Hero používa Motion `useScroll` a transformácie obrazu. Zoznamy môžu mať jeden krátky stagger. Košík používa pružný, ale nie skákavý prechod. Pri zníženom pohybe sa všetko zmení na okamžitú zmenu alebo krátky crossfade.

## Responsive Behavior

Rozloženia sa pod 768 px skladajú do jedného stĺpca. CTA zostávajú viditeľné v prvom viewporte. Košík prejde z bočného panelu na celú šírku a formuláre nikdy nepoužijú viac než jeden stĺpec na malom displeji.

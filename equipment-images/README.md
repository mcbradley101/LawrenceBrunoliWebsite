# Equipment photo upload checklist

Every inventory entry has one assigned JPEG filename below. Eleven uploaded photographs are installed; the other 19 entries retain placeholders. Uploading an approved photo with its assigned name is enough: no card markup, stylesheet, or page redesign needs to be edited.

## Simplest way to add a photo in GitHub

1. Choose a company-owned photo, or a photo whose commercial website reuse is explicitly permitted. Confirm that it matches the correct equipment. Confirm the identities of **Volvo 312B** and **Caterpillar D56** before adding their photos.
2. Export it as a real **JPEG** (`.jpg`), preferably about 1200–1600 pixels wide. Do not merely rename a PNG, WebP, or HEIC file to `.jpg`. Use a view that shows the whole machine; the page fits photographs without cropping them.
3. Rename it to the exact lowercase filename in the checklist, including hyphens and `.jpg`.
4. In GitHub, open the `equipment-images` folder on your chosen review branch. Select **Add file → Upload files**, upload the photo, and save it to that branch. Use your normal pull-request review process.
5. Refresh the equipment page once the uploaded file is available in the website version you are viewing. The matching photo appears automatically. A GitHub upload does not itself update an unpublished local checkout or a separate deployment. This is load-on-visit behavior, not a live file watcher; refresh after adding or replacing files.

Missing, zero-byte, unreadable, or corrupt images leave the existing attractive placeholder. No broken image element or clickable missing-file link is inserted. Photos load as cards approach the viewport; if JavaScript is disabled, placeholders remain. Successful photos can be clicked to view the original JPEG in a new tab.

No external photo websites are contacted by the loader, and failed image requests are not retried automatically. Each expected local file is checked at most once per page visit. Missing local files may appear as 404s in browser developer tools, but never as broken-image icons in the page.

## Filename checklist

Put these files directly in **`equipment-images/`**, not in another nested folder. Filenames are case-sensitive on the website. Tick the boxes as approved photographs are uploaded.

| Uploaded | Equipment entry | Exact filename inside equipment-images |
| --- | --- | --- |
| ☐ | Volvo 312B Excavator | `volvo-312b-excavator.jpg` |
| ☑ | Caterpillar 321 Excavator | `caterpillar-321-excavator.jpg` |
| ☑ | John Deere 35D Mini Excavator | `john-deere-35d-mini-excavator.jpg` |
| ☑ | Caterpillar D5H Bulldozer | `caterpillar-d5h-bulldozer.jpg` |
| ☐ | Caterpillar D56 Bulldozer | `caterpillar-d56-bulldozer.jpg` |
| ☑ | Caterpillar D3 Bulldozer | `caterpillar-d3-bulldozer.jpg` |
| ☐ | John Deere 550B Bulldozer | `john-deere-550b-bulldozer.jpg` |
| ☑ | Skat Trak Skid Steer | `skat-trak-skid-steer.jpg` |
| ☑ | John Deere 624 Loader | `john-deere-624-loader.jpg` |
| ☐ | John Deere 310D Excavator/Loader | `john-deere-310d-excavator-loader.jpg` |
| ☐ | Hyster Roller | `hyster-roller.jpg` |
| ☐ | Wacker Roller | `wacker-roller.jpg` |
| ☐ | Volvo SD77DX Vibratory Roller/Compactor | `volvo-sd77dx-vibratory-roller-compactor.jpg` |
| ☐ | Plate Compactors | `plate-compactors.jpg` |
| ☐ | Caterpillar TH56 Telehandler | `caterpillar-th56-telehandler.jpg` |
| ☐ | Caterpillar TH83 Telehandler | `caterpillar-th83-telehandler.jpg` |
| ☑ | JCB 530 Telehandler | `jcb-530-telehandler.jpg` |
| ☑ | JCB 525 Telehandler | `jcb-525-telehandler.jpg` |
| ☑ | Hydraulic Saws | `hydraulic-saws.jpg` |
| ☐ | Scissor Lifts | `scissor-lifts.jpg` |
| ☐ | Demo Saws & Road Saw | `demo-saws-road-saw.jpg` |
| ☐ | Surveying Equipment | `surveying-equipment.jpg` |
| ☐ | Fall Protection/Extraction Equipment | `fall-protection-extraction-equipment.jpg` |
| ☐ | Road Plates | `road-plates.jpg` |
| ☐ | Jersey Barriers | `jersey-barriers.jpg` |
| ☑ | 2012 Ford F550 | `2012-ford-f550.jpg` |
| ☐ | Ford F150 | `ford-f150.jpg` |
| ☐ | GMC Canyon | `gmc-canyon.jpg` |
| ☑ | 2013 Toyota Tacoma | `2013-toyota-tacoma.jpg` |
| ☐ | GMC Sierra | `gmc-sierra.jpg` |

## Photo permissions and accurate labeling

Only place a photograph at its assigned filename after approving its equipment match and reuse rights. The loader checks whether a file can be displayed; it cannot verify copyright permission or identify machinery. Never use unrelated or watermarked photographs, and do not remove watermarks.

`photo-register.json` retains a separate entry for every machine, including `assigned_image_path`, source/license/attribution fields, and the two model-identification concerns. The previous network access observations remain as historical research notes; no further blocked-site retries are needed for this upload workflow. Empty license fields do not grant reuse permission. Update the record when a photo is approved; it is a manual audit record, not an automatic approval system.

For a representative external photograph, the visible caption/credit must identify it as illustrative and include any license-required attribution. Do not upload an image needing such a credit until that caption has been added. Original company-owned photos do not need a stock-photo disclaimer. Approval of these two uncertain model names must precede assigning their photographs; inventory names are unchanged.

The default alt text uses the exact inventory name. If an approved photograph needs a more specific description, `data-image-alt` can be added to that card's `.equipment-photo` element. For an alternative file format, intentionally update `data-image-src` on the matching card; the simple upload-only workflow above consistently uses JPEG.

## Files involved

- `equipment.html`: maps each card to its assigned relative image path.
- `equipment.js`: loads and decodes the image off the page before swapping out the placeholder; errors preserve the placeholder.
- `equipment.css`: keeps the existing 4:3 image area and uncropped photographs.
- `equipment-images/photo-register.json`: manual provenance and permission record.

## First researched candidate batch

See [FIRST-BATCH.md](FIRST-BATCH.md) for all ten user-supplied Commons source links, matching existing filenames, authors, proposed license details, variant qualifications, and the SD77/SD77DX hold. No images were installed because Commons access was blocked. Candidate license/model data is not a verified approval record. Credits render only for successfully loaded files; use the exact associated source and update metadata when changing photographs.

### John Deere 35D uploaded photograph

Installed from the user-provided ZIP, unchanged: 2048 × 1536 JPEG, 477,100 bytes. DEERE and 35D markings are visible. The pictured attachment is a bucket, not the listed hammer. This photograph does not establish company ownership.

WindBorneListener and CC0 1.0 are supplied source claims, **not independently verified**. No embedded authorship/license metadata was present; the previously blocked source was not retried. See `photo-register.json` for the source claim and file checksum. Confirm the source attribution and reuse terms before publication.

### Caterpillar D5H uploaded photograph

Installed from `caterpillar-d5h-bulldozer.zip`, unchanged: 1920 × 1284 JPEG, 733,370 bytes. CAT/CATERPILLAR and D5H LGP markings are visible. The LGP configuration and company ownership are not established for the listed company machine.

Supplied source: https://commons.wikimedia.org/wiki/File:Caterpillar_Cat_D5H_LGP.jpg . Joost J. Bakker and CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/) are supplied claims, **not independently verified**. No embedded authorship/license metadata was present; blocked websites were not retried. The on-page credit labels these claims as unverified. See `photo-register.json` for the file checksum. Confirm source, attribution and reuse terms before publication.

### John Deere 624 uploaded photograph

Installed from `john-deere-624-loader.zip`, unchanged: 1703 × 1062 JPEG, 329,666 bytes. DEERE and 624J markings are visible. Caption and alternative text identify a representative **624J**, while the inventory name remains **John Deere 624 Loader**. The company machine’s exact variant and ownership of the photographed unit are not established.

Supplied source: https://commons.wikimedia.org/wiki/File:John_Deere_624.jpg . Greg Goebel and CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0/) are supplied claims, **not independently verified**. No embedded authorship/license metadata was present; blocked websites were not retried. The on-page credit labels these claims as unverified. See `photo-register.json` for the checksum. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with its attribution and applicable share-alike requirements.

### 2012 Ford F550 uploaded photograph

Installed from `2012-ford-f550.zip`, unchanged: 1920 × 1135 JPEG, 491,069 bytes. Ford/F-550 markings, a utility service body and Shaw branding are visible. The 2012 model year is user-supplied and not independently verified. The caption explicitly identifies this as a representative photograph, not Lawrence Brunoli’s actual truck. The inventory remains **2012 Ford F550**.

Supplied source: https://commons.wikimedia.org/wiki/File:2012_Ford_F-550_Shaw_Service_Truck,_Front_Left,_03-22-2022.jpg . Elise240SX and CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/) are supplied claims, **not independently verified**. No embedded authorship/license metadata was present; blocked websites were not retried. The on-page credit labels these claims as unverified. See `photo-register.json` for the checksum. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with its attribution and applicable share-alike requirements.

### 2013 Toyota Tacoma uploaded photograph

Installed from `2013-toyota-tacoma (1).zip`, unchanged: 1920 × 1013 JPEG, 567,927 bytes. Toyota Tacoma and V6 SR5 badges are visible; the 2013 model year is supplied, not independently verified. The caption explicitly identifies this as a representative photograph, not Lawrence Brunoli’s actual truck. Inventory name remains **2013 Toyota Tacoma**.

Supplied source: https://commons.wikimedia.org/wiki/File:2013_Toyota_Tacoma_V6_SR5_Double_Cab_Long_Bed,_Rear_Right,_04-11-2020.jpg . SsmIntrigue and CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/) are supplied claims, **not independently verified**. No embedded authorship/license metadata was present; blocked websites were not retried. On-page credits label these claims as unverified. See `photo-register.json` for the checksum. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with attribution and applicable share-alike requirements.

### Skat Trak uploaded photograph

Installed from `skat-trak-skid-steer.zip`, unchanged: 1920 × 1440 JPEG, 552,257 bytes. SCAT TRAK and 1300D markings are visible. Caption identifies a representative Scat Trak 1300D, not the company’s machine. Inventory spelling **Skat Trak Skid Steer** and attachment descriptions remain unchanged.

Embedded JPEG comment: `File source: http://commons.wikimedia.org/wiki/File:Scat_Trak_1300D.JPEG`. This matches the supplied source URL but does not independently prove provenance, authorship or reuse permission. Supplied attribution **U.S. Army photograph by SFC Orbe** and **public domain in the United States** status remain **unverified**, including whether this particular photograph qualifies as a U.S. federal government work. No embedded photographer/rights statement was found; blocked websites were not retried. Credits label these claims as unverified. See `photo-register.json` for checksum and source review. Confirm authorship and applicable reuse rights before publication.

### Caterpillar 321 uploaded photograph

Installed from `caterpillar-321-excavator.zip`, unchanged: 1920 × 1446 JPEG, 1,083,863 bytes. CAT and 321D LCR markings are visible. Caption identifies a representative 321D LCR, not the company’s machine. Inventory name **Caterpillar 321 Excavator** and hammer attachment description remain unchanged; the photograph shows a bucket.

Supplied source: https://commons.wikimedia.org/wiki/File:Caterpillar_321D_LCR_on_dirt_lot_in_Campbell.jpg . Supplied photographer **Grendelkhan** and **CC BY-SA 4.0** (https://creativecommons.org/licenses/by-sa/4.0/) remain **independently unverified**. No embedded photographer/source/license metadata was found; blocked websites were not retried. Credits label these claims as unverified. See `photo-register.json` for checksum and review. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with attribution and applicable share-alike requirements.

### Caterpillar D3 uploaded photograph

Installed from `caterpillar-d3-bulldozer.zip`, unchanged: 1920 × 1192 JPEG, 856,668 bytes. Worn D3B marking is consistent with the supplied identification. Caption identifies a representative D3B, not the company’s machine. Inventory remains **Caterpillar D3 Bulldozer**.

Supplied source: https://commons.wikimedia.org/wiki/File:Caterpillar_D3B_Crawler_Tractor_(15790160976).jpg . Supplied photographer **Bob Adams** and **CC BY-SA 2.0** (https://creativecommons.org/licenses/by-sa/2.0/) remain **independently unverified**. EXIF Artist says `Picasa`, not Bob Adams; this does not establish authorship. No embedded source/license statement was found; blocked websites were not retried. Credits label these claims as unverified. See `photo-register.json` for checksum and metadata review. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with attribution and applicable share-alike requirements.

### JCB 530 uploaded photograph

Installed from `jcb-530-telehandler.zip`, unchanged: 1920 × 1280 JPEG, 937,351 bytes. Visible 530/70 markings are consistent with the supplied JCB 530-70 identification. Caption identifies a representative 530-70, not the company’s machine. Inventory remains **JCB 530 Telehandler**.

Supplied source: https://commons.wikimedia.org/wiki/File:JCB_530-70.jpg . Supplied photographer **Bene Riobó** and **CC BY-SA 4.0** (https://creativecommons.org/licenses/by-sa/4.0/) remain **independently unverified**. No embedded photographer/source/license metadata was found; blocked websites were not retried. Credits label these claims as unverified. See `photo-register.json` for checksum and review. Confirm source, attribution and reuse terms before publication; if the supplied license is confirmed, comply with attribution and applicable share-alike requirements.

### JCB 525 uploaded photograph

Installed from `jcb-525-telehandler.zip`, unchanged: 1920 × 1440 JPEG, 1,411,832 bytes. JCB and 525-60 markings are visible. Caption identifies a representative 525-60, not the company’s machine. Inventory remains **JCB 525 Telehandler**.

User-supplied Wikimedia Commons source: https://commons.wikimedia.org/wiki/File:JCB_525-60_at_Carlisle_station.jpg . Association of this source with the uploaded file is **not independently verified**. Photographer, copyright holder and license are **unknown and unverified**; no names or permissions are inferred. No photograph authorship/license metadata was found. Google Inc. 2016 copyright text appears inside the sRGB color profile and does not establish photograph ownership. No blocked websites retried. Credits explicitly flag unverified information. See `photo-register.json` for checksum and review. Confirm provenance, attribution and reuse terms before publication.

### Hydraulic Saws uploaded photograph — rights review required

Installed from `hydraulic-saws.zip`, unchanged: 1920 × 1427 JPEG, 726,044 bytes. Shows a chainsaw with hydraulic connections and separate hydraulic power unit, consistent with the supplied description. Caption identifies a representative photograph, not the company’s actual equipment. Inventory remains **Hydraulic Saws**.

User-supplied Wikimedia Commons source: https://commons.wikimedia.org/wiki/File:Betonkettensaege.jpg . Association with the uploaded file is **not independently verified**. Photographer, copyright holder and license are **unknown and unverified**; no names or permissions are inferred. No embedded source/authorship/license metadata was found. Commons access was previously blocked and was not retried per the user’s instruction. Visible credits flag missing verification. **Verify attribution, applicable license and reuse conditions from the exact Commons file page before publication.** See `photo-register.json` for checksum and review.

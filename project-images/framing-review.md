# Project image framing review

Only the 22 requested project IDs receive sizing rules in `projects.css`. Original photographs, HTML, descriptions, buttons, gallery scripts, shared navigation, and the 13 approved photo panels are unchanged.

The issue was intrinsic image sizing: older, small source files were rendered at their native pixel dimensions inside larger panels. The corrected photos now use the available panel area with `object-fit: contain` and a centered position. Every photograph keeps its proportions and full content. Portrait and panoramic images retain the existing soft background rather than being cropped.

Each project has an individual source-size setting that preserves its existing panel minimum. The photo can fill unused space inside its current card, without making the card taller. These settings apply to the existing gallery views as well.

Some originals are low resolution. The correction improves presentation but cannot recreate detail absent from the original files. No original was replaced, retouched, or resampled.

## Per-project adjustments

| Project | Treatment |
|---|---|
| Clinton Railroad Station – North Platform Improvements and Pedestrian Bridge | Both station views now fill the existing panel more evenly; towers and pedestrian bridge remain fully visible. |
| Stone Masonry Wall Rehabilitation U.S. Rt. 1 | Both portrait wall views remain contained and centered; no road edge or wall detail is cropped. |
| Northwestern Connecticut Community College — Joyner Hall | Enlarged the complete building view within the existing panel, preserving the roof and site. |
| State Street Rail Station | Enlarged the aerial station view within the existing panel; full platform context retained. |
| Hammonasset Beach State Park, West Beach Improvements | Enlarged the complete aerial view; parking layout and shoreline remain visible. |
| Hartford Job Corp | Enlarged the full campus aerial view without cropping the surrounding buildings. |
| Veterans Administration Medical Center | Enlarged and centered the complete hospital exterior; roofline and flags retained. |
| State Receiving Home | Enlarged the complete building/site view without cutting off the addition. |
| Salt Shed & Maintenance Facility | Sized the wide facility photograph to the existing panel, retaining both buildings. |
| Renovations & Additions to Student Center Central Connecticut State University | Enlarged the complete student-center facade, preserving the curved entrance and roofline. |
| Greenwood School Renovations | Enlarged and centered the full school facade; entrance and grounds retained. |
| Outdoor Track & Field Complex — University of Connecticut | Enlarged the complete track-and-field aerial view; no track corners are cropped. |
| Additions & Renovations to Oliver Wolcott Vocational Technical School | Enlarged the complete aerial view, retaining the school wings and site. |
| Hubbard Elementary | Enlarged the full school frontage, including the entrance and grounds. |
| McAlister Middle School | Used a full-width contained panorama, keeping the entire long school facade visible. |
| East Hampton Middle School | Enlarged the complete low-rise school frontage without cropping the curved entrance. |
| Killingworth Elementary School | Enlarged and centered the entrance view; canopy and columns retained. |
| Science Classroom Addition at Guilford High School | Enlarged the full entrance photograph without cropping its identifying signage. |
| Danbury Correctional Institution | Enlarged the full correctional-facility entrance view without cropping the facade. |
| J.B. Gates Correctional Center | Enlarged the complete campus aerial view, retaining the full group of buildings. |
| Minimum Security Dorm at Cheshire Correctional Center | Enlarged the full historic-building view; roofline and frontage retained. |
| Minimum Security Dorm Visitors Center at Niantic Community Correctional Center | Enlarged and centered the complete entrance view, preserving the roof and arch. |

## Validation

- Chromium at 100% zoom: 1920, 1440, 1366, 1280, 1024, 768, 390, and 320px.
- Compare all card dimensions and unaffected image dimensions/styles before and after. No card grows beyond browser subpixel rounding.
- Compare all 13 unaffected photo-panel screenshots at 1440px and 390px, normalizing fractional screenshot coordinates and allowing less than 1/255 mean RGB difference for browser subpixel rasterization; unaffected image files, dimensions, fitting styles, and card dimensions also compared exactly.
- Check each requested gallery view, thumbnail selection, on-page viewer, Escape key, and horizontal overflow.
- Only `projects.css` and this review document are changed.

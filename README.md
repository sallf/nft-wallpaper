# E&N Design Engineer Challenge

### [Figma design & instructions](https://www.figma.com/design/kT2HOZLLowfbBNKKcvNdsb/Design-Engineer-Challenge-'24?node-id=74-1006&t=ExpnE1yl3BivMAvX-1)

## Getting Started

Run `pnpm install` to install the dependencies, then `pnpm dev` to start the dev server at `http://localhost:3000`.

## Notes

I aimed to closely match the mockup given the project's time constraints and scope. Here are some key points for the review:

1. To handle component sizing, I got a pure CSS solution to work, instead of tracking window size, which felt excessive for this project but might have been a little easier to understand.
2. The Copy and Download/Save buttons are functional. With more time, I would implement a feedback mechanism, like a toast message, to confirm successful actions.
3. We weren't using the "active" state for the copy button, so I omitted it to save time.
4. I integrated [GSAP](https://gsap.com/) to fade out (`opacity: 0`) and then hide (`display: none`) the `Meta` menu, ensuring that the invisible button is not accessible via keyboard navigation. I frequently use this pattern.
5. For better accessibility, I added a `tabIndex: 0` to the `Item` component to enable keyboard focus and blur for opening and closing the menu.
6. On large screens, the last slide expands and then makes you scroll to see the meta data. With more time, I would have made the meta menus of the last few items open on the left side.

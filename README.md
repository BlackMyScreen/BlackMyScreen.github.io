# BlackMyScreen
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![BlackMyScreen Logo](assets/BlackMyScreen.png)

<p align="right">
  Made with <a href="https://BlackMyScreen.github.io">BlackMyScreen.github.io</a> 😉
</p>

## What?

Visit [BlackMyScreen.github.io](https://BlackMyScreen.github.io) to download a black background image for your phone, tablet or desktop.

Especially useful to save battery on OLED displays.

In addition it includes a colorful "I'm Feeling Lucky" background, go and try it out 😍

## How

I've used svelte to generate the js as I don't find other opportunities to use it and was too lazy for vanilla even though it was my first plan. 🤷‍♂️

Images are being rendered via `<canvas/>` the page itself has no dependencies.

The "I'm Feeling Lucky" background comes almost straight from the Svelte tutorial on [Bindings/This](https://svelte.dev/tutorial/bind-this)

Update: The animation is now using a dedicated **WebWorker** 🚀 to calculate the next colors, which made the whole site much more responsive. Before that even hovering a link would take seconds before it changed its colors 😬

Rollup livereload is currently not properly working 😕

## Why ask for money?

Even though it's completely free, didn't cost me any actual money and I made it for fun, I ask for support as I moved to Perú, founded a non-profit and am working full time in rainforest conservation to help sustain our planet. If you like what I do please consider donating any amount via one of the many options so I can continue my work & protect more rainforest.

[PayPal](https://www.paypal.com/cgi-bin/webscr?hosted_button_id=5HFKFRYSFPJTU&cmd=_s-xclick)
| [Amazon.com](https://www.amazon.com?&_encoding=UTF8&tag=canrau-20&linkCode=ur2&linkId=ec6f8d1a20517adfd103e9241830c79d&camp=1789&creative=9325) | [Amazon.de](https://www.amazon.de?&_encoding=UTF8&tag=cara0f-21&linkCode=ur2&linkId=174406bdb90287801fab97f7a18e84b3&camp=1638&creative=6742) | [GaiAma.org](https://www.gaiama.org/en/donate)

## License

Feel free to stroll thru the source and take what you need.

[MIT](license) © [Can Rau](https://www.canrau.com/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.GaiAma.org"><img src="https://avatars0.githubusercontent.com/u/5196971?v=4" width="100px;" alt=""/><br /><sub><b>Can Rau</b></sub></a><br /><a href="https://github.com/BlackMyScreen/BlackMyScreen.github.io/commits?author=CanRau" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
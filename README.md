Welcome to the Foo et al. parameterization! 

The parameterization can take the radius of a sphere and return its volume usthe the equation V = 4/3*pi*r^3.

This will be a (fictitious)community project.

There are many ways to access the Foo et al. parameterization.

1. Going to this [website](https://www.michaeljlange.com/foo_et_al/sphere.html) to access a web version.
2. Add the library to your own project via npm.
3. Add to your website through the cdn link.
4. Download the standalone [Version](https://drive.google.com/uc?export=download&id=1EmVe52qegFlhy4af7EwecS2PxLcsdZRT). 

## Getting Started 

If you wish to add this library to your project you can install via NPM:

```sh
    npm i foo_et_al_param
```
or add this to the `head` tag in your html: 
```sh
    <script src="https://cdn.jsdelivr.net/npm/foo_et_al_param@1.1.0/src/index.js"></script>
```
After downloading the standalone [Version](https://drive.google.com/uc?export=download&id=1EmVe52qegFlhy4af7EwecS2PxLcsdZRT) unzip the folder 
got to Foo_Standalone-win32-x64>Foo_Standalone-win32-x64 and run Foo_Standalone.exe

### Prerequisites

If you do not have npm install it first:
* npm
  ```sh
  npm install npm@latest -g
  ```

## Usage

Example:

```sh
    const foo = require("foo_et_al_param");
    let radius = 3;
    let volume = foo.calculateVolume(radius);
    console.log (volume);
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



# PrestaShop 1.7 Webpack 3 sample configuration files

Sample webpack 3 configuration files for PrestaShop Starter theme

==For PrestaShop Development training only.==

### Prerequisites

- You need a shop with **PrestaShop 1.7.0.0** or higher.
- You need **NodeJS**.
- You need access to the **shell** of your server.

## Installing

1. Install files

    ```sh
    $ cd prestashop_root_directory/themes/my_theme/_dev
    $ git clone https://github.com/frederic-benoist/webpack-sample.git 
    $ mv -force webpack-sample/* ./
	$ rm -r -force webpack-sample
    ```

2. install dependencies

    ```sh    
    npm install
    ```

## Running 

1. Watch files and recompile whenever they change.
    ```sh 
    npm run watch
    ```
2. Build assets in development mode (source map, etc.)
    ```sh 
    npm run dev
    ```
3. Build assets in production mode (minify, etc.)
    ```sh 
    npm run prod
    ```

## Authors

* **Frédéric BENOIST** - *Initial work* - [Expert PrestaShop](https://www.fbenoist.com)

See also the list of [contributors](https://github.com/frederic-benoist/webpack-sample/Contributors) who participated in this project.

## Licensing

This source file is subject to the Academic Free License (AFL 3.0)
that is available through the world-wide-web at this URL:
http://opensource.org/licenses/afl-3.0.php
If you did not receive a copy of the license and are unable to
obtain it through the world-wide-web, please send an email
to license@prestashop.com so we can send you a copy immediately.

## DISCLAIMER
 
> Do not edit or add to this file if you wish to upgrade this module to newer versions in the future. If you wish to customize PrestaShop for your needs please refer to http://www.prestashop.com for more information.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

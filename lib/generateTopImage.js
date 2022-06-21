const yaml = require('yamljs');
const fs = require('fs');
const path = require('path');

const baseSourceDir = path.resolve(__dirname, '../source');

function run() {
  try {
    const configString = fs.readFileSync(path.join(__dirname, './_config.yml'), 'utf8');
    const configs = yaml.parse(configString);
    const wallpapers = fs.readdirSync(path.join(baseSourceDir, configs.top_image_dir));
    const generateFilePath = path.join(baseSourceDir, configs.generate_image_script_position);
    if (fs.existsSync(generateFilePath)) {
      return;
    }

    const imageFileName = wallpapers.filter((item) => {
      return /\.(jpg|jpeg|png|gif|svg|webp)$/gi.test(item);
    });

    const generatorTemplate = path.resolve(__dirname, configs.generate_image_template);
    let template = fs.readFileSync(generatorTemplate, 'utf-8');
    template = template.replace('$imageList', JSON.stringify(imageFileName));
    template = template.replace('$wallpapers_dir', `${configs.top_image_dir}/`);

    fs.writeFileSync(generateFilePath, template);

    console.log('generate random image script success~');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  run,
};

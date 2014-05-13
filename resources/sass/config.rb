# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)
fonts_path =  File.join(dir,  '..', '..', 'touch', 'resources', 'themes', 'fonts')
# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join(dir, "..", "images")
output_style = :compressed
environment = :production

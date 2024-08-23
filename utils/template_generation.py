from jinja2 import Environment, FileSystemLoader, select_autoescape
import os
import shutil
import argparse
import re

parser = argparse.ArgumentParser(description='Convert detector')

parser.add_argument('-d', '--detector_gltf', help='Location of detector gltf file',
                        default='', type=str)
parser.add_argument('-n', '--name', help='Name of detector component',
                        default='', type=str)
args = parser.parse_args()

parent = os.path.dirname(os.getcwd())
new_folder = f'{parent}/src/app/{args.name}'

files = os.listdir(f'{parent}/src/app')
detector_names = []
for f in files: 
    if not re.search('.html|.ts|.scss|main', f):
        detector_names.append(f)

shutil.copyfile(args.detector_gltf, f'{parent}/src/assets/detectors/{os.path.basename(args.detector_gltf)}')

if not os.path.exists(new_folder):
    os.makedirs(new_folder)

env = Environment(
    loader=FileSystemLoader("templates/"),
    autoescape=select_autoescape()
)

scss_path = f'{new_folder}/{args.name}.component.scss'
with open(f'{scss_path}', 'w') as s:
    pass

detec_html = env.get_template("component.html.jinja")
html_render = detec_html.render(name = args.name)
with open(f'{new_folder}/{args.name}.component.html', 'w') as h:
    h.write(html_render)

detec_ts = env.get_template("component.ts.jinja")
ts_render = detec_ts.render(html_location = f'./{args.name}.component.html', scss_location = f'./{args.name}.component.scss', name = args.name, detector_path = f'assests/detectors/{os.path.basename(args.detector_gltf)}')
with open(f'{new_folder}/{args.name}.component.ts', 'w') as t:
    t.write(ts_render)

os.remove(f'{parent}/src/app/app.module.ts')
app_mod = env.get_template("app.module.ts.jinja")
mod_render = app_mod.render(folders = detector_names)
with open(f'{parent}/src/app/app.module.ts', 'w') as a:
    a.write(mod_render)

os.remove(f'{parent}/src/app/main/main.component.html')
main_ts = env.get_template("main.component.html.jinja")
main_render = main_ts.render(folders = detector_names)
with open(f'{parent}/src/app/main/main.component.html', 'w') as m:
    m.write(main_render)

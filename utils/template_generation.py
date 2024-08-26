from jinja2 import Environment, FileSystemLoader, select_autoescape
import os
import shutil
import argparse
import re
import subprocess

def main():
    parser = argparse.ArgumentParser(description='Convert detector')

    parser.add_argument('-d', '--detector_gltf', help='Location of detector gltf file',
                            default='', type=str)
    parser.add_argument('-n', '--name', help='Name of detector component',
                            default='', type=str)
    args = parser.parse_args()

    parent = os.path.dirname(os.getcwd())
    shutil.copyfile(args.detector_gltf, f'{parent}/src/assets/detectors/{os.path.basename(args.detector_gltf)}')
    adding_detector_files(args.name, parent, os.path.basename(args.detector_gltf))

def adding_detector_files(detector_name, parent, gltf):
    new_detector_location = f'{parent}/src/app/{detector_name}'

    if not os.path.exists(new_detector_location):
        os.makedirs(new_detector_location)

    env = Environment(
        loader=FileSystemLoader("templates/"),
        autoescape=select_autoescape()
    )

    scss_path = f'{new_detector_location}/{detector_name}.component.scss'
    with open(f'{scss_path}', 'w') as s:
        pass

    detec_html = env.get_template("component.html.jinja")
    html_render = detec_html.render(name = detector_name)
    with open(f'{new_detector_location}/{detector_name}.component.html', 'w') as h:
        h.write(html_render)

    detec_ts = env.get_template("component.ts.jinja")
    ts_render = detec_ts.render(html_location = f'./{detector_name}.component.html', scss_location = f'./{detector_name}.component.scss', name = detector_name, detector_path = f'assets/detectors/{gltf}')
    with open(f'{new_detector_location}/{detector_name}.component.ts', 'w') as t:
        t.write(ts_render)

    files = os.listdir(f'{parent}/src/app')
    folder_list = []
    for f in files: 
        if not re.search('.html|.ts|.scss|main', f):
            folder_list.append(f)

    os.remove(f'{parent}/src/app/app.module.ts')
    app_mod = env.get_template("app.module.ts.jinja")
    mod_render = app_mod.render(folders = folder_list)
    with open(f'{parent}/src/app/app.module.ts', 'w') as a:
        a.write(mod_render)

    os.remove(f'{parent}/src/app/main/main.component.html')
    main_ts = env.get_template("main.component.html.jinja")
    main_render = main_ts.render(folders = folder_list)
    with open(f'{parent}/src/app/main/main.component.html', 'w') as m:
        m.write(main_render)

    #subprocess.run([])

if __name__ == '__main__':
    main()

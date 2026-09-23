import argostranslate.package

argostranslate.package.update_package_index()

for package in argostranslate.package.get_available_packages():
    if package.from_code == "de" and package.to_code == "en":
        path = package.download()
        argostranslate.package.install_from_path(path)
        print("Installed Argos Translate German -> English")
        break
else:
    raise SystemExit("German-English Argos package was not found")

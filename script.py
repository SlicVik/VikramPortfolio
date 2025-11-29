import os

# Extensions to capture
EXTENSIONS = {'.tsx', '.ts', '.css', '.html', '.jsx', '.js', '.json'}
# Folders to ignore
SKIP_DIRS = {'node_modules', '.git', 'dist', 'build', 'public', '.vercel'}

def combine_project():
    print(f"📂 Scanning directory: {os.getcwd()}")
    output_text = ""
    file_count = 0
    
    for root, dirs, files in os.walk("."):
        # Filter out ignored directories
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        
        print(f"   Scanning: {root}...")
        
        for file in files:
            if any(file.endswith(ext) for ext in EXTENSIONS):
                # Skip the script itself
                if file == "combine_code.py": continue
                
                filepath = os.path.join(root, file)
                file_count += 1
                print(f"   -> Found: {file}")
                
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                        output_text += f"\n{'='*50}\nFILE: {filepath}\n{'='*50}\n"
                        output_text += content + "\n"
                except Exception as e:
                    print(f"❌ Error reading {filepath}: {e}")

    if file_count == 0:
        print("\n⚠️  No files found! Are you in the right folder?")
        print(f"Looking for files ending in: {EXTENSIONS}")
    else:
        with open("full_project_code.txt", "w", encoding='utf-8') as f:
            f.write(output_text)
        print(f"\n✅ Success! Combined {file_count} files into 'full_project_code.txt'.")

if __name__ == "__main__":
    combine_project()
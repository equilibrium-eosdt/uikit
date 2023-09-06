import { writeFile } from "fs/promises";
import path from "path";

const prepareContents = (data: string) => {
  const contents = data
    .replace(/\/\*.*\*\//g, "")
    .replace(/[\n\r]/g, "")
    .replace(/\s/g, "");

  const rules = contents.split("}").filter(Boolean);
  const result = new Set<string>();

  for (const rule of rules) {
    const [, v] = rule.split("{").map((s) => s.trim());

    const ruleset = v.split(";");
    // const s = k.split(",");
    // console.log(k, v);

    const vars = ruleset
      .map((line) => line.split(":")[0])
      .filter((entry) => entry.startsWith("--"))
      .forEach((x) => result.add(x));
  }

  return Array.from(result);
};

const read = async (stream: typeof process.stdin) => {
  const chunks: Buffer[] = [];

  for await (const chunk of stream) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString("utf8");
};

const DISCLAMER = "// auto generated; better not edit";

const constantsTemplate = (vars: string[]) => `${DISCLAMER}
export const THEME_VARS_GENERATED = {
  ${vars.map((name) => `  "${name}": "${name}",`).join("\n")}
} as const;
`;

const main = async () => {
  const data = await read(process.stdin);

  if (!data) {
    throw new Error("empty stdin");
  }

  const vars = prepareContents(data);
  const contantsVars_generated = constantsTemplate(vars);
  const outDir = path.join(process.cwd(), "constants");

  await writeFile(
    path.join(outDir, "vars.generated.ts"),
    contantsVars_generated,
    { encoding: "utf8" },
  );
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

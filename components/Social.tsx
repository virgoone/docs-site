import { DiscordIcon, GitHubIcon } from "nextra/icons";

function Github() {
  return (
    <a
      href="https://github.com/lark-org/lark-cli"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Lark CLI GitHub repo"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://turbo.build/discord"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Turbo Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

export { Github, Discord };

import { Navbar } from "nextra-theme-docs";

function Navigation(props) {
  /*
    Inject a dynamic docs link when NOT on root
    1. Points to /repo/docs when on /repo
    2. Points to /pack/docs when on /pack
  */

  // const lastItem = props.items[props.items.length - 1];
  // if (lastItem?.id !== "contextual-enterprise") {
  //   props.items.push({
  //     title: "Enterprise",
  //     newWindow: true,
  //     // https://github.com/shuding/nextra/issues/1028
  //     route: "enterprise",
  //     href: `https://vercel.com/${"solutions/turborepo"}?utm_source=turbo.build&utm_medium=referral&utm_campaign=header-enterpriseLink`,
  //     id: "contextual-enterprise",
  //     key: "contextual-enterprise",
  //   });
  // }

  // // remove the top level repo and pack links
  // const headerItems = props.items.filter((item) => {
  //   return item.name !== "repo" && item.name !== "pack";
  // });

  // items last to override the default
  return <Navbar {...props} /> //items={headerItems} />;
}

export default Navigation;

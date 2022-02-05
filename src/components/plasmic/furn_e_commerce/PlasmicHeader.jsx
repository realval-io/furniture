// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8eQZy5xry36pEn1xTFSb3G
// Component: 9kaYRQveml8
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import MenuButton from "../../MenuButton" // plasmic-import: 2BaPXHgWx31v/component
import LinkButton from "../../LinkButton" // plasmic-import: RGZ_Q1DJMavQ/component
import IconLink from "../../IconLink" // plasmic-import: DmqKQHoj3weO/component
import { useScreenVariants as useScreenVariantsn35PTdUkddpF } from "./PlasmicGlobalVariant__Screen" // plasmic-import: N35pTdUkddpF/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css" // plasmic-import: 8eQZy5xry36pEn1xTFSb3G/projectcss
import * as sty from "./PlasmicHeader.module.css" // plasmic-import: 9kaYRQveml8/css
import SearchIcon from "./icons/PlasmicIcon__Search" // plasmic-import: BS1Qgy2qqXTM/icon
import CogIcon from "./icons/PlasmicIcon__Cog" // plasmic-import: cSOW4BIUwUzL/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart" // plasmic-import: rzAumREIqEkE/icon
import plasmicBJsPU1PGw5N from "./images/plasmic.png" // plasmic-import: bJsP-U1pGw5n/picture

export const PlasmicHeader__VariantProps = new Array("expanded")

export const PlasmicHeader__ArgProps = new Array()

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsn35PTdUkddpF(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant(variants, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__raMsc)}
      >
        {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton, {
              [sty.menuButtonexpanded]: hasVariant(
                variants,
                "expanded",
                "expanded"
              ),
            })}
            expanded={
              hasVariant(variants, "expanded", "expanded") &&
              hasVariant(globalVariants, "screen", "mobile")
                ? true
                : undefined
            }
          />
        ) : null}

        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={"/"}
          platform={"gatsby"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={{
              src: plasmicBJsPU1PGw5N,
              fullWidth: 3216,
              fullHeight: 624,
              aspectRatio: undefined,
            }}
          />
        </p.PlasmicLink>

        {(
          hasVariant(variants, "expanded", "expanded") &&
          hasVariant(globalVariants, "screen", "mobile")
            ? true
            : hasVariant(globalVariants, "screen", "mobile")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___05OFt, {
              [sty.freeBoxexpanded___05OFtDo2Hs]: hasVariant(
                variants,
                "expanded",
                "expanded"
              ),
            })}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__tOcBx)}
              href={"/#home"}
              size={"small"}
              text={"Home"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__sLjhh)}
              href={"/#new-arrival"}
              size={"small"}
              text={"New Arrival"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__r9B2Q)}
              href={"/#features"}
              size={"small"}
              text={"Features"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__eD1Ui)}
              href={"/#blog"}
              size={"small"}
              text={"Blog"}
              type={"blankGray"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__whDaz)}
              href={"/#contact"}
              size={"small"}
              text={"Contact"}
              type={"blankGray"}
            />
          </div>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___3RV0)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__d5YHl)}
            icon={
              <SearchIcon
                className={classNames(projectcss.all, sty.svg__rgPvY)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__pJ8R8)}
            icon={
              <CogIcon
                className={classNames(projectcss.all, sty.svg__bHkg)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__vru24)}
            icon={
              <ShoppingCartIcon
                className={classNames(projectcss.all, sty.svg__adNri)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>

      {(
        hasVariant(variants, "expanded", "expanded") &&
        hasVariant(globalVariants, "screen", "mobile")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__lnvL, {
            [sty.freeBoxexpanded__lnvLdo2Hs]: hasVariant(
              variants,
              "expanded",
              "expanded"
            ),
          })}
        >
          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__q3P9N)}
            text={"Home"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__t9U7I)}
            text={"New Arrival"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__cl9VQ)}
            text={"Features"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__so3M1)}
            text={"Blog"}
            type={"blankGray"}
          />

          <LinkButton
            className={classNames("__wab_instance", sty.linkButton__uuwKm)}
            text={"Contact"}
            type={"blankGray"}
          />
        </div>
      ) : null}
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "menuButton", "link", "img"],
  menuButton: ["menuButton"],
  link: ["link", "img"],
  img: ["img"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps,
    })

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader"
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`
  }
  return func
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuButton: makeNodeComponent("menuButton"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps,
  }
)

export default PlasmicHeader
/* prettier-ignore-end */

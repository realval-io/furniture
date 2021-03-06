// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8eQZy5xry36pEn1xTFSb3G
// Component: T3CyYLQoVwtk
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import LinkButton from "../../LinkButton" // plasmic-import: RGZ_Q1DJMavQ/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css" // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_furn_e_commerce.module.css" // plasmic-import: 8eQZy5xry36pEn1xTFSb3G/projectcss
import * as sty from "./PlasmicProductCarousel.module.css" // plasmic-import: T3CyYLQoVwtk/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO" // plasmic-import: bbYUXctwkCaP/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO" // plasmic-import: HoAkRGxfdLDU/icon
import slider1C5SwbOn1XrWe from "./images/slider1.png" // plasmic-import: c5swbOn1xrWE/picture
import slider23ECWeMjJfb from "./images/slider2.png" // plasmic-import: -3e-cWEMjJfb/picture
import slider3BYqQ7PoEiJdl from "./images/slider3.png" // plasmic-import: bYqQ7POEiJDL/picture

export const PlasmicProductCarousel__VariantProps = new Array("slider")

export const PlasmicProductCarousel__ArgProps = new Array()

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__itMo1)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__puJeK, {
            [sty.freeBoxslider_second__puJeKaBjbS]: hasVariant(
              variants,
              "slider",
              "second"
            ),
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__updjQ
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fCTk,
              {
                [sty.textslider_first__fCTkPnUEt]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.textslider_second__fCTkABjbS]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.textslider_third__fCTkIt1Ck]: hasVariant(
                  variants,
                  "slider",
                  "third"
                ),
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o3Lvy
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__ldGql)}>
            <div className={classNames(projectcss.all, sty.freeBox__qDRxJ)} />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xlIdz,
                {
                  [sty.textslider_second__xlIdzaBjbS]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.textslider_third__xlIdzit1Ck]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yl65,
                {
                  [sty.textslider_first__yl65PnUEt]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),

                  [sty.textslider_second__yl65ABjbS]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.textslider_third__yl65It1Ck]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  ),
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wVdTk)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__sRuBj)}
              text={"??? Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton___2Tsu0)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__dCy8F)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.imgslider_first]: hasVariant(variants, "slider", "first"),
              [sty.imgslider_second]: hasVariant(variants, "slider", "second"),
              [sty.imgslider_third]: hasVariant(variants, "slider", "third"),
            })}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={
              hasVariant(variants, "slider", "third")
                ? {
                    src: slider3BYqQ7PoEiJdl,
                    fullWidth: 553,
                    fullHeight: 475,
                    aspectRatio: undefined,
                  }
                : hasVariant(variants, "slider", "second")
                ? {
                    src: slider23ECWeMjJfb,
                    fullWidth: 528,
                    fullHeight: 559,
                    aspectRatio: undefined,
                  }
                : {
                    src: slider1C5SwbOn1XrWe,
                    fullWidth: 507,
                    fullHeight: 549,
                    aspectRatio: undefined,
                  }
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jhNvh)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__nyn4O, {
            [sty.svgslider_second__nyn4OaBjbS]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svgslider_third__nyn4Oit1Ck]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__yvou6, {
            [sty.svgslider_first__yvou6PnUEt]: hasVariant(
              variants,
              "slider",
              "first"
            ),

            [sty.svgslider_second__yvou6ABjbS]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svgslider_third__yvou6It1Ck]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__gvtRd, {
            [sty.svgslider_third__gvtRdit1Ck]: hasVariant(
              variants,
              "slider",
              "third"
            ),
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps,
    })

    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel"
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`
  }
  return func
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps,
  }
)

export default PlasmicProductCarousel
/* prettier-ignore-end */

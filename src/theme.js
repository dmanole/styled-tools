// @flow
import prop from "./prop";
import type { PropsWithTheme } from ".";

/**
 * Same as `prop`, except that it returns `props.theme[path]` instead of
 * `props[path]`.
 * @example
 * import styled from "styled-components";
 * import { theme } from "styled-tools";
 *
 * const Button = styled.button`
 *  color: ${theme("button.color", "red")};
 * `;
 */
const theme = (path: string, defaultValue?: any) => (props: PropsWithTheme) =>
  prop(`theme.${path}`, defaultValue)(props);

export default theme;

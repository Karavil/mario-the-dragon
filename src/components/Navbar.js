import React from 'react'
import { NavigationBar, Stack, LinkList, TextLink, ButtonLink} from '@kiwicom/orbit-components/lib'
const Navbar = () => {
  return (
    <NavigationBar
    dataTest="test"
    onHide={function noRefCheck(){}}
    onMenuOpen={function noRefCheck(){}}
    onShow={function noRefCheck(){}}
  >
    <Stack
      align="center"
      flex
      justify="between"
      spacing="none"
    >
      <LinkList direction="row">
        <TextLink type="secondary">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DragonDen
        </TextLink>
      </LinkList>
      <Stack
        direction="row"
        justify="end"
        shrink
        spacing="tight"
      >
        <ButtonLink
          transparent
          type="secondary"
        >
          Help
        </ButtonLink>
        <ButtonLink
          transparent
          type="secondary"
        >
          Account
        </ButtonLink>
      </Stack>
    </Stack>
  </NavigationBar>
  );
}

export default Navbar;
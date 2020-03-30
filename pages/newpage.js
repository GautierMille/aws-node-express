import { EmptyState, Page } from "@shopify/polaris";
import Link from 'next/link';

const Newpage = () => (
  <Page>
    <Link href="/">
      <a>Home</a>
    </Link>
  </Page>
)
export default Newpage;